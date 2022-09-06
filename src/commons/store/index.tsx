import { atom } from "recoil";

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
});

export const userInfoState = atom({
    key: "userInfoState",
    default: {
        id: "",
        email: "",
        name: "",
        nickname: "",
        phone: ""
    }
});

export const isLoadedState = atom({
    key: "isLoadedState",
    default: false,
});

export const isLogoutState = atom({
    key: "isLogoutState",
    default: "로그아웃",
})