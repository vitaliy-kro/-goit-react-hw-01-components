import { Box } from '../Box';
import { ParamName } from './TransactionHistory.styled';
export const TranSactionHistoryHead = () => {
  return (
    <Box as="thead">
      <Box as="tr">
        <ParamName>Type</ParamName>
        <ParamName>Ammount</ParamName>
        <ParamName>Currency</ParamName>
      </Box>
    </Box>
  );
};
