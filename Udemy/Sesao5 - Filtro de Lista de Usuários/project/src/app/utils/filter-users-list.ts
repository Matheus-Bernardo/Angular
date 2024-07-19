import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IfilterOptions } from "../interfaces/filter-options-interface";

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
        return usersList;
    }
    const FILTERED_LIST = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return FILTERED_LIST;
}

const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;
    if (STATUS_NOT_SELECTED) {
        return usersList;
    }

    const FILTRED_LIST = usersList.filter((user) => user.ativo === status);
    return FILTRED_LIST;


}

const fiterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] =>{
    const DATE_NOT_SELECT = startDate === undefined || endDate === undefined;
    if (DATE_NOT_SELECT) {
        return usersList;
    }

    const LIST_FILTRED = usersList.filter((user) => isWithinInterval(new Date(user.dataCadastro),
        {
            start: startDate,
            end: endDate
        }));
    return LIST_FILTRED;

}

const filterUsersList = (filterOptions: IfilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList);
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
    filteredList = fiterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
} 

export {  filterUsersList  };