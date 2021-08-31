import { Box } from 'theme-ui';
import RcDrawer from 'rc-drawer';
import classNames from 'classnames';

export default function Drawer ({ 
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <>
      <RcDrawer
        className={classNames('drawer', className)}
        onClose={toggleHandler}
        open={open}
        width={width}
        placeholder={placement}
        handler={false}
        level={null}
        duration="0.4s"
        {...props}
      >
        {closeButton && (
          <Box
            as="div"
            sx={closeButtonStyle}
            onClick={toggleHandler}
          >
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>
          {children}
        </Box>
      </RcDrawer>
      <Box
        className="drawer__handler"
        sx={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </Box>
    </>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};
