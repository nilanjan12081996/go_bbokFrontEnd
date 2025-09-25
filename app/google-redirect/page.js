'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { googleSignIn } from "../reducers/AuthSlice";
import { Spinner } from "flowbite-react";

const page=()=>{
     const dispatch = useDispatch();
         const router = useRouter();

     useEffect(() => {
        // const ggltoken = localStorage.getItem("googleAccessToken");
        const videoToken = sessionStorage.getItem("goBookToken");

        console.log("videoToken:", videoToken);

        const ggltoken = videoToken ? JSON.parse(videoToken)?.token : null;

        console.log("ggltoken:", ggltoken);

        if (ggltoken) {
            dispatch(googleSignIn({ token: ggltoken })).then(
                (response) => {
                    console.log("gglresponse: ", response);
                    const userToken = response?.payload?.access_token; //Adjust based on your action response structure
                    console.log("userToken ggl", userToken);

                    if (userToken) {
                        console.log("Setting new videoToken...");
                        sessionStorage.setItem(
                            "goBookToken",
                            JSON.stringify({ token: userToken })
                        );
                        // dispatch(editProfile());
                        console.log("inside side effect");
                        console.log(
                            "New videoToken set:",
                            sessionStorage.getItem("goBookToken")
                        );
                    
                    } else {
                        toast.success(response?.payload, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            progress: undefined,
                            theme: "light",
                        });
                        router.push("/dashboard");
                    }
                }
            );
        } else {

            router.push("/");
        }
    }, [dispatch]);

    return(
        <>
            <div className="h-96 flex justify-center items-center">
                <Spinner />
            </div>
        </>
    )
}
export default page