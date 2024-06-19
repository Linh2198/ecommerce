import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"

export const User = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return <div>
            <Button colorScheme="teal" onClick={onOpen} >Create Mall</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay></ModalOverlay>
                <ModalContent>
                    <ModalCloseButton />
                    <ModalHeader>Create Mall</ModalHeader>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Mall name</FormLabel>
                            <Input placeholder="Mall name" />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal">Save</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
}