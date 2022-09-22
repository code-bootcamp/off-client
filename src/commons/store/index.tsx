import { atom } from "recoil";

export const accessTokenState = atom({
    key: "accessTokenState",
    default: "",
});

export const userInfoState = atom({
    key: "userInfoState",
    default: {},
});

export const isLoginState = atom({
    key: "isLoginState",
    default: false,
});

export const fridgeInfoState = atom({
    key: "fridgeInfoState",
    default: {},
})

export const addressState = atom({
    key: "addressState",
    default: ""
})

export const roomIdState = atom({
    key: "roomIdState",
    default: ""
})