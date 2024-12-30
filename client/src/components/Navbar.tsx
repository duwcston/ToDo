import { Box, Flex, Text, Container } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export default function Navbar() {

    return (
        <Container maxW={"200vh"}>
            <Box px={4} my={4} borderRadius={"5"}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    {/* LEFT SIDE */}
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={3}
                        display={{ base: "none", sm: "flex" }}
                    >
                        <Text fontSize={"lg"} fontWeight={500}>
                            React + Go + MongoDB + Vite
                        </Text>
                    </Flex>

                    {/* RIGHT SIDE */}
                    <Flex alignItems={"center"} gap={3}>
                        <Text fontSize={"lg"} fontWeight={500}>
                            Daily Tasks
                        </Text>
                        {/* Toggle Color Mode */}
                        <ColorModeButton />
                    </Flex>
                </Flex>
            </Box>
        </Container>
    );
}