import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
}

const AccountModal: React.FC<Props> = ({ account, logout, onDismiss = () => null }) => {

  const kccMode = window.location.href.indexOf('ku.kafe.finance') >= 0 || window.location.href.indexOf('kukafe.finance') >= 0
  const movrMode = window.location.href.indexOf('moon.kafe.finance') >= 0

  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        {account}
      </Text>
      <Flex mb="32px">
        {/* <LinkExternal small href={`https://explorer.kcc.io/en/address/${account}`} mr="16px">
          View on {movrMode ? "BlockScout":"KccExplorer"}
        </LinkExternal> */}

        {movrMode ? (<LinkExternal small href={`https://blockscout.moonriver.moonbeam.network/address/${account}`} mr="16px">
          View on BlockScout
        </LinkExternal>):("")}


          {kccMode ? (<LinkExternal small href={`https://explorer.kcc.io/en/address/${account}`} mr="16px">
          View on KccExplorer
        </LinkExternal>):("")}


        <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
      </Flex>
      <Flex justifyContent="center">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            logout();
            window.localStorage.removeItem(localStorageKey);
            onDismiss();
            window.location.reload();
          }}
        >
          Logout
        </Button>
      </Flex>
    </Modal>
  );
}






export default AccountModal;
