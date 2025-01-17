import React, {useEffect, useState} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import QRCode from "react-qr-code";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import {useTranslation} from "react-i18next";
import "../../styles/farmers.scss";
import Loading from "../Loading";
import {getAllFarmers} from "../../db/firebase";
import {useAuthContext} from "../../states/AuthContext";
import FormInput from "../common/FormInput";
import {CustomPagination} from "../common/Pagination";
import NotFound from "../common/NotFound";
import {GenderFilterList, SEARCH_DIVIDER} from "../../utils/constants";
import {SearchIcon} from "../icons/search";
import {ClearIcon} from "../icons/clear";
import {LinkIcon} from "../icons/link";

const saveSvgAsPng = require("save-svg-as-png");

const pagDefault = {
    previous: 0,
    current: 0,
    next: 0,
    pages: 0,
    itemsPerPage: 15,
    itemsCount: 0,
    lastId: "0",
};

type FarmerType = {
    farmerId: string;
    address: string;
    fullname: string;
    bio: string;
    gender: string;
    location: string;
    search: string;
};

export const List = () => {
    const {t} = useTranslation();
    const {authState} = useAuthContext();
    const [state] = authState;
    const [loading, setLoading] = useState(true);
    const [farmers, setFarmers] = useState<Array<FarmerType>>([]);
    const [farmers2, setFarmers2] = useState<Array<FarmerType>>([]);
    const [farmersCount, setFarmersCount] = useState(0);
    const [pagination, setPagination] = useState(pagDefault);
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [searchCriteria, setSearchCriteria] = useState("");
    const [currentGender, setCurrentGender] = useState(GenderFilterList[0]);


    let subtitle: { style: { color: string; }; };
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const confPagination = (fData: Array<any>, itemsPerPage: number) => {
        if (fData.length > 0) {
            const itemsCount = fData.length;
            const pages = Math.ceil(itemsCount / itemsPerPage);
            const lastDataPage = Math.ceil(itemsCount / itemsPerPage);
            const pag = {
                previous: 0,
                current: 1,
                next: 2,
                pages,
                lastDataPage,
                itemsPerPage,
                itemsCount,
                lastId: "0",
            };
            setPagination(pag);
            setFarmersCount(itemsCount);
        } else {
            setPagination(pagDefault);
        }
    };

    /* const calculateFarmersCount = (fData: Array<any>) => {
      let total = 0;
      fData.forEach((farmer) => {
        const [farmerId, fullname] = farmer.data();
        if (farmerId !== "" && fullname !== "") {
          total += 1;
        }
      });
      setFarmersCount(total);
    }; */

    useEffect(() => {
        const load = async () => {
            const farmerList = new Array<FarmerType>();
            let companyName = "PROEXO";
            const hostname = window.location.hostname;
            if (hostname.includes("copranil")) {
                companyName = "COPRANIL";
            } else if (hostname.includes("commovel")) {
                companyName = "COMMOVEL";
            } else if (hostname.includes("comsa")) {
                companyName = "COMSA";
            }
            await getAllFarmers(companyName).then((result) => {
                for (let i = 0; i < result.length; i += 1) {
                    const farmerData = result[i].data();
                    const {
                        farmerId,
                        address,
                        fullname,
                        bio,
                        gender,
                        village,
                        region,
                        country,
                    } = farmerData;
                    const l = village
                        .concat(", ")
                        .concat(region)
                        .concat(", ")
                        .concat(country);
                    const s = farmerId
                        .concat(SEARCH_DIVIDER)
                        .concat(fullname)
                        .concat(SEARCH_DIVIDER)
                        .concat(bio)
                        .concat(SEARCH_DIVIDER)
                        .concat(l);
                    farmerList.push({
                        farmerId,
                        address,
                        fullname,
                        bio,
                        gender,
                        location: l,
                        search: s.toLowerCase(),
                    });
                }
                setFarmers(farmerList);
                setFarmers2(farmerList);
                confPagination(result, 15);
                // calculateFarmersCount(result);
            });
            setLoading(false);
        };
        load();
    }, []);

    const onPageSelected = (pageNumber: number) => {
        const nextPage = pageNumber === pagination.pages ? 0 : pageNumber + 1;
        const newPagination = {
            ...pagination,
            previous: pageNumber === 1 ? 0 : pageNumber - 1,
            current: pageNumber,
            next: nextPage,
        };
        setPagination(newPagination);
    };

    const filterByCriteria = (f: FarmerType) =>
        f.search.includes(searchCriteria.toLowerCase());

    const filterByGender = (f: FarmerType) => {
        const fgender = f.gender.toLowerCase();
        return fgender === currentGender.key;
    };

    const filterFarmers = () => {
        let farmerList = farmers2.slice();
        if (searchCriteria.trim().length > 0) {
            farmerList = farmerList.filter(filterByCriteria);
        }
        if (currentGender.key !== "all") {
            farmerList = farmerList.filter(filterByGender);
        }

        setFarmers(farmerList);
        confPagination(farmerList, 15);
    };

    const handleSearchCriteriaChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const input = event.target.value;
        setSearchCriteria(input);
    };

    const handleSearchCriteriaKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        const input = event.currentTarget.value.trim();
        if (event.key === "Enter" && input.length > 1) {
            filterFarmers();
        }
    };


    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const key = event.target.value;
        for (let i = 0; i < GenderFilterList.length; i += 1) {
            if (GenderFilterList[i].key === key) {
                setCurrentGender(GenderFilterList[i]);
            }
        }
    };

    const onSearchClick = () => {
        filterFarmers();
    };

    const onClearClick = () => {
        setSearchCriteria("");
        setFarmers(farmers2.slice());
        confPagination(farmers2, 15);
    };

    const handleOnDownloadClick = () => {
        saveSvgAsPng.saveSvgAsPng(
            document.getElementById("current-qr"),
            "qr-farmer",
            {
                scale: 0.5,
            }
        );
    };

    const RenderFilters = () => (<>

        <div className="w-full p-5 rounded-lg">
            <div className="text-center">
                <>{t("search-farmers")}</>
            </div>
            <div className="relative">
                <div className="absolute flex items-center ml-2 h-full">
                    <SearchIcon className="m-4 w-4 h-4 fill-current"/>
                </div>

                <FormInput
                    label={t("")}
                    value={searchCriteria}
                    placeholder={t("search-name")}
                    handleOnChange={handleSearchCriteriaChange}
                    handleOnKeyDown={handleSearchCriteriaKeyDown}
                    errorMsg=""
                    className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"/>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 m-4">


                <button onClick={() => onSearchClick()} className="btn font-bold py-2 px-4 rounded inline-flex items-center rounded-md bg-amber-200 active:text-white active:text-white
                                        focus:bg-amber-400 active:bg-amber-600">
                    <SearchIcon className="w-4 h-4 mr-2"/>
                    <>{t("search")}</>
                </button>
                <button onClick={() => onClearClick()} className="btn font-bold py-2 px-4 rounded inline-flex items-center rounded-md bg-red-200 active:text-white active:text-white
                                        focus:bg-red-400 active:bg-red-700">
                    <ClearIcon className="w-4 h-4 mr-2"/>
                    <>{t("clear")}</>
                </button>
                <select id="dropdown-cooperative" className="select w-full max-w-xs" onChange={handleGenderChange}>
                    <option disabled selected><> {t("gender")}</>:</option>
                    {currentGender.name}
                    {GenderFilterList.map((item) => (<option value={item.key}>
                        {item.name}
                    </option>))}
                </select>
            </div>

        </div>

    </>);


    const RenderItem = (farmer: FarmerType, index: number) => {
        const itemPage = Math.ceil((index + 1) / pagination.itemsPerPage);

        if (farmer.fullname === "" && farmer.farmerId === "") {
            return <></>;
        }
        const farmerUrl = window.location.origin
            .concat("/farmer/")
            .concat(farmer.address);

        return (<tr
            key={index}
            className={`${pagination.current === itemPage ? "show" : "hide"} flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 border-grey-light border-2`}>

            <td className="p-3 text-base font-light">
                <div className="qrcode">
                    <label htmlFor="farmerlist" className="btn btn-ghost h-full"
                           onClick={() => {
                               setQrCodeUrl(farmerUrl);
                           }}
                    >
                        <QRCode value={farmerUrl} size={60}/>
                    </label>
                </div>
            </td>
            <td className="p-3 text-base font-light">
                   {farmer.farmerId}
            </td>
            <td className="p-3 text-base font-light">
                      <a className="link link-info" href={farmerUrl} target="_blank" rel="noreferrer">
                    {farmer.fullname}
                </a>
            </td>
            <td className="p-3 text-base font-light">
                     <>{t(farmer.gender)}</>
            </td>
            <td className="p-3 text-base font-light">
                    {farmer.location}
            </td>
            <td className="p-3 text-base font-light">
                     {farmer.address}
            </td>
        </tr>);
    };


    if (loading) {
        return (<Loading
            label={t("loading").concat("...")}
            className="loading-wrapper two"
        />);
    }

    return (
        <>
            <input type="checkbox" id="farmerlist" className="modal-toggle"/>
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="farmerlist"
                           className="btn btn-sm bg-red-500 text-white btn-circle hover:bg-red-700 absolute right-2 top-2">✕</label>
                    <div className="flex justify-center m-6">
                        <div>
                            <QRCode id="farmerlist" value={qrCodeUrl} size={300}/>
                            <div className="flex pt-8 space-x-4 place-content-center">
                                <div>
                                    <button
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                                        onClick={handleOnDownloadClick}>
                                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20">
                                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                                        </svg>
                                        <>{t("download")}</>
                                    </button>
                                </div>
                                <div>
                                    <a href={qrCodeUrl}>
                                        <button
                                            className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                                            <LinkIcon></LinkIcon>
                                            <>{t("open-link")}</>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-8">
                <div className="farmers flex flex-row mb-1 sm:mb-0 justify-between w-full">
                    <div className=" w-full h-full p-1">
                        <div className="card shadow-xl bg-white">
                            {RenderFilters()}
                            <div className="card-body">
                                <div className="card-title grid justify-items-stretch">
                                    <div className="justify-self-start">
                                        <h4>
                                            <>{t("farmers")}</>
                                        </h4>
                                    </div>
                                    <div className="justify-self-end">
                                        <h4>
                                            <>
                                                {t("total")}: {farmersCount}
                                            </>
                                        </h4>
                                        <a className="link link-info">
                                            <ReactHTMLTableToExcel
                                                id="table-xls-button"
                                                className="download-xls-button"
                                                table="farmers-list"
                                                filename={t("farmers")}
                                                sheet={t("farmers")}
                                                buttonText={"(".concat(t("download")).concat(")")}
                                            />
                                        </a>
                                    </div>

                                    <div className="overflow-x-scroll">
                                        {farmers === null ? (
                                            <NotFound msg="No se encontraron productores"/>
                                        ) : (
                                            <>
                                                <div className="text-center">
                                                    <table
                                                        className="farmers-list w-full sm:bg-white rounded-lg overflow-hidden  my-5">
                                                        <thead>
                                                        <tr className="bg-amber-800 flex flex-col flex-no wrap text-white sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                            <th className="p-3 text-center border-white border ">
                                                                QR
                                                            </th>
                                                            <th className="p-3 text-center border-white border">
                                                                <>{t("code")}</>
                                                            </th>
                                                            <th className="p-3 text-center border-white border">
                                                                <>{t("name")}</>
                                                            </th>
                                                            <th className="p-3 text-center border-white border">
                                                                <>{t("gender")}</>
                                                            </th>
                                                            <th className="p-3 text-center border-white border">
                                                                <>{t("location")}</>
                                                            </th>
                                                            <th className="p-3 text-center border-white border">
                                                                <>{t("account-address")}</>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="flex-1 sm:flex-none">
                                                        {farmers.map((farmer: any, index: number) =>
                                                            RenderItem(farmer, index)
                                                        )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="card-actions flex justify-center pt-4">
                                        <CustomPagination
                                            pagination={pagination}
                                            onPageSelected={onPageSelected}
                                            className={''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
