import React, { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { ApiService } from './services/ApiService';

type StateClick = {
    chat: boolean;
    cart: boolean;
    notification: boolean;
    userProfile: boolean;
};

type User = {
    name: string;
    accessToken: string;
    refreshToken: string;
    email: string;
    totalMoney: number;
    public_key: string;
    private_key: string;
};

const initialState: StateClick = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};
type State = {
    activeMenu: boolean;
    setActiveMenu: (menu: boolean) => void;
    click: StateClick;
    setClick: (click: StateClick) => void;
    handleClick: (name: string) => void;
    user: User;
    setUser: (user: User) => void;
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
    setDefault: () => void;
};

export const StateContext = createContext<State>({
    activeMenu: false,
    setActiveMenu(menu: boolean): void {},
    click: initialState,
    setClick(click: StateClick): void {},
    handleClick(name: string): void {},
    user: {
        name: '',
        accessToken: '',
        refreshToken: '',
        email: '',
        totalMoney: 0,
        public_key: '',
        private_key: '',
    },
    setUser(user: User): void {},
    isLogin: false,
    setIsLogin(isLogin: boolean): void {},
    setDefault(): void {},
});

type Props = {
    children: React.ReactNode;
};
export const ContextProvider = ({ children }: Props) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [click, setClick] = useState(initialState);
    const [user, setUser] = useState<User>({
        name: '',
        accessToken: '',
        refreshToken: '',
        email: '',
        totalMoney: 0,
        public_key: '',
        private_key: '',
    });
    const [isLogin, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useCookies(['accessToken']);
    const setDefault = () => {
        setClick(initialState);
        setUser({
            name: '',
            accessToken: '',
            refreshToken: '',
            email: '',
            totalMoney: 0,
            public_key: '',
            private_key: '',
        });
        setIsLogin(false);
    };
    const handleClick = (name: string) => {
        setClick({ ...initialState, [name]: true });
    };
    React.useEffect(() => {
        if (accessToken.accessToken) {
            new ApiService().getCurrentUser(accessToken.accessToken).then((res) => {
                setUser(res);
                setIsLogin(true);
            });
        } else {
            setDefault();
        }
    }, [accessToken.accessToken]);

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                click,
                setClick,
                handleClick,
                user,
                setUser,
                isLogin,
                setIsLogin,
                setDefault,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
