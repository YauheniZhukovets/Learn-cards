import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import SuperInputText from "../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText";
// import SuperButton from "../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton";
// import {NavLink} from "react-router-dom";
// import {AppStoreType} from "../../../n1-main/m2-bll/store";
// import { PATH } from '../../../n1-main/m1-ui/routes/RoutesRoot';
// import s from './Forgot.module.css'
//
// export const Forgot = () => {
//     const isSend = useSelector<AppStoreType, boolean>(state => state.recovery.isSend);
//     const error = useSelector<AppStoreType, string | null>(state => state.app.error)
//     const loading = useSelector<AppStoreType, boolean>(state => state.app.isLoading);
//
//
//     useEffect(() => {
//         dispatch(setErrorAC(''))
//     }, [])
//
//     const [email, setEmail] = useState('')
//
//     const dispatch = useDispatch()
//
//     let onClickHandler = () => {
//         dispatch(passwordForgotTC(email))
//     }
//
//     if (isSend) {
//         return <Navigate to={PATH.CHECK_EMAIL}/>
//     }
//     return (
//         <div className={s.wrapper}>
//
//             <div className={s.frame}>
//                 <span><strong>It-incubator</strong></span>
//                 <h2>Forgot your password?</h2>
//                 {error && <div className={s.error}>{error}</div>}
//                 <div className={s.input}>
//                     <label>
//                         Email
//                     </label>
//                     <SuperInputText error={error}
//                                     value={email}
//                                     onChangeText={setEmail}
//                     />
//                 </div>
//                 <p>Enter your email address and we will send you further instructions</p>
//                 <SuperButton onClick={onClickHandler} style={{padding: '10px 60px'}}>Send instructions</SuperButton>
//                 <p>Did you remember your password?</p>
//                 <NavLink to={PATH.LOGIN} className={s.linkLogin}>
//                     <p className={s.signUpText}>Try logging in</p>
//                 </NavLink>
//             </Frame>
//         </>
//     )
// }
