import {Component, useEffect} from "react";
import {AbsoluteCenter, Box, Spinner} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {BsPlusLg} from "react-icons/bs";

export default function MenuEditor() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Please Wait...";

        const uuid = crypto.randomUUID();
        navigate(`/m/${uuid}`);
    }, [navigate]);

    return (
        <Box position="relative" h="100%">
            <AbsoluteCenter textAlign="center">
                <Spinner size="md"/>
            </AbsoluteCenter>
        </Box>
    );
}