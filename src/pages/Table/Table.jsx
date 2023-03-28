import TableCom from 'components/TableCom/TableCom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { products } from 'redux/product/product-oparation';
import { isLoading } from 'redux/product/product-selector';
import { FallingLines } from 'react-loader-spinner';

export default function Table() {
  const dispatch = useDispatch();
  const isLoadingEl = useSelector(isLoading);
  console.log('isLoadingEl', isLoadingEl);

  useEffect(() => {
    dispatch(products());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
