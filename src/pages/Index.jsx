import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, Textarea, useToast, VStack, Image, Link } from "@chakra-ui/react";
import { FaPaperPlane, FaLink, FaImage, FaVideo } from "react-icons/fa";

const Index = () => {
  const [message, setMessage] = useState("");
  const [media, setMedia] = useState(null);
  const [mediaType, setMediaType] = useState("");
  const toast = useToast();

  // This should be replaced by actual logic to handle file uploads
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(URL.createObjectURL(file));
      setMediaType(file.type.startsWith("image") ? "image" : "video");
    }
  };

  const sendMessage = () => {
    // This should be replaced by actual logic to send a message
    toast({
      title: "Message sent!",
      description: "Your anonymous message has been sent.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setMessage("");
    setMedia(null);
    setMediaType("");
  };

  // This should be replaced by the actual logic to generate a special link
  const specialLink = "https://yourapp.com/special-link";

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Text fontSize="xl">Send an anonymous message</Text>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here..." />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="media">Attach a picture or video</FormLabel>
          <Input type="file" id="media" accept="image/*,video/*" onChange={handleMediaChange} />
          {mediaType === "image" && <Image src={media} maxH="300px" mt={4} />}
          {mediaType === "video" && (
            <video controls maxH="300px" mt={4}>
              <source src={media} type="video/*" />
            </video>
          )}
        </FormControl>
        <Button leftIcon={<FaPaperPlane />} colorScheme="teal" onClick={sendMessage} isDisabled={!message && !media}>
          Send
        </Button>
        <Stack direction="row" alignItems="center">
          <FaLink />
          <Text>Share this link with friends to receive messages:</Text>
          <Link href={specialLink} isExternal color="teal.500">
            {specialLink}
          </Link>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;
