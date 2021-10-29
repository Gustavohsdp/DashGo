import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Henrique</Text>
          <Text color="gray.300" fontSize="small">
            gustavohsdp@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Henrique"
        src="https://avatars.githubusercontent.com/u/63484124?s=400&u=2ccc6a9b4f6546d7022deabd43743cc35d15b9cd&v=4"
      />
    </Flex>
  );
}
