import TableCom from 'components/TableCom/TableCom';
import { useSelector } from 'react-redux';

import { isLoading } from 'redux/product/product-selector';
import { FallingLines } from 'react-loader-spinner';

export default function Table() {
  const isLoadingEl = useSelector(isLoading);

  return (
    <div style={{ position: 'relative' }}>
      {isLoadingEl ? (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        >
          <FallingLines
            color="var(--primary)"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      ) : (
        <TableCom />
      )}
    </div>
  );
}
