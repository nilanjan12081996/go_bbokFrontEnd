'use client';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { googleSignIn } from "../reducers/AuthSlice";
import { Spinner } from "flowbite-react";

const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(true);

    useEffect(() => {
        const handleGoogleSignIn = async () => {
            try {
                const videoToken = sessionStorage.getItem("goBookToken");
                console.log("videoToken:", videoToken);

                const ggltoken = videoToken ? JSON.parse(videoToken)?.token : null;
                console.log("ggltoken:", ggltoken);

                if (ggltoken) {
                    // Wait for the Google sign-in to complete
                    const response = await dispatch(googleSignIn({ token: ggltoken }));
                    console.log("gglresponse: ", response);
                    
                    const userToken = response?.payload?.access_token;
                    console.log("userToken ggl", userToken);

                    if (userToken) {
                        console.log("Setting new videoToken...");
                        
                        // Update the token in sessionStorage
                        sessionStorage.setItem(
                            "goBookToken",
                            JSON.stringify({ token: userToken })
                        );
                        
                        console.log("New videoToken set:", sessionStorage.getItem("goBookToken"));
                        
                        // Wait a bit to ensure token is properly set
                        setTimeout(() => {
                            setIsProcessing(false);
                            router.push("/dashboard");
                        }, 100);
                        
                    } else if (response?.payload) {
                        // Handle success message case
                        toast.success(response?.payload, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            progress: undefined,
                            theme: "light",
                        });
                        
                        setTimeout(() => {
                            setIsProcessing(false);
                            router.push("/dashboard");
                        }, 100);
                    } else {
                        // Handle error case
                        console.error("No token received from Google sign-in");
                        setIsProcessing(false);
                        router.push("/");
                    }
                } else {
                    console.log("No Google token found, redirecting to home");
                    setIsProcessing(false);
                    router.push("/");
                }
            } catch (error) {
                console.error("Error during Google sign-in:", error);
                setIsProcessing(false);
                router.push("/");
            }
        };

        handleGoogleSignIn();
    }, [dispatch, router]);

    return (
        <>
            <div className="h-96 flex justify-center items-center">
                {isProcessing ? (
                    <div className="text-center">
                        <Spinner />
                        <p className="mt-4 text-gray-600">Completing sign-in...</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <p>Redirecting...</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default page;