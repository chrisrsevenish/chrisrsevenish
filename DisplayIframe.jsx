import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend((
  { actions } // serverless function is not required for simply displaying an iframe
) => <Extension openIframe={actions.openIframeModal} />);

// Define the Extension component, taking in openIframe as a prop
const Extension = ({ openIframe }) => {
  const handleClick = () => {
    openIframe({
      uri: "https://reach.randallreilly.com/", // this is a relative link. Some links will be blocked since they don't allow iframing
      height: 1000,
      width: 1000,
      title: 'Stratas Reach',
      flush: true,
    });
  };

  return (
    <>
      <Flex direction="column" align="start" gap="medium">
        <Text>
          Clicking the button will open a popup so you can submit a reach form directly through the HubSpot Portal.
        </Text>

        <Box>
          <Button type="submit" onClick={handleClick}>
            Open Reach
          </Button>
        </Box>
      </Flex>
    </>
  );
};
