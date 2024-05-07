import * as React from 'react';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import CloseIcon from '@mui/icons-material/Close';
interface propInterFace {
    show_title?:string;
    request_methode?:string;
}
export default function PopUpModle({show_title, request_methode}:propInterFace) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [ip, setIp] = React.useState<string>('');
  const [memo, setMemo] = React.useState<string>('');
  const handleIpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIp(event.target.value);
  };
  const handleMemoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(event.target.value);
  };
  const handleSubmit = () => {
    // Do something with ip and memo values, like sending them to an API
    alert(`${request_methode?request_methode:''}?ip= ${ip}&&memo=${memo}`);
    setIp('');
    setMemo('');
  };

  return (
    <div>
      <TriggerButton type="button" onClick={handleOpen}>
       {show_title? show_title : 'Add title prop'}
      </TriggerButton>
      <Modal
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
        keepMounted
      >
        <ModalContent sx={{ minWidth: '250px', maxWidth:'max-content' }} title='pop up'>
            <div className='modal-title w-full bg-sky-600 py-1.5 px-3 text-white flex flex-row items-center justify-between'>
              <span>{ show_title? show_title : 'Add show_title prop' }</span>
              <div className='bg-sky-500 px-2 py-2 rounded-full' onClick={handleClose}>
                <CloseIcon   />
              </div>
            </div>
            <div className='form px-2 flex flex-col items-start justify-around gap-3'>
               <div className='flex flex-row items-center justify-start gap-3'>
                <div className='px-3 py-1.5 rounded-full bg-gray-100 text-sky-400'>
                 <label htmlFor='ip'>Ip</label>
                </div>
                 <input type='text' id='ip' placeholder='ip ....' className=' rounded-full border border-1 border-sky-400 w-full px-3 py-1.5' 
                    value={ip}
                    onChange={handleIpChange}
                 />
               </div>
               <div className='flex flex-row items-center justify-start gap-3'>
                <div className='px-3 py-1.5 rounded-full bg-gray-100 text-sky-400'>
                 <label htmlFor='memo' className='whitespace-nowrap'>메모</label>
                </div>
                 <input type='text' id='memo' placeholder='ip ....' className=' rounded-full border border-1 border-sky-400 w-full px-3 py-1.5'
                    value={memo}
                    onChange={handleMemoChange}
                  />
               </div>
            </div>
            <div className='flex flex-row items-center justify-end gap-3 px-4'>
                <TriggerButton sx={{background:'rgb(2 132 199)', color:'white'}} onClick={handleSubmit}>확인</TriggerButton> 
                <TriggerButton onClick={handleClose} sx={{background:'rgb(239 68 68)', color:'white'}}>취소</TriggerButton> 
            </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Modal = styled(BaseModal)(`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.base-Modal-hidden {
    visibility: hidden;
  }
`);

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    top:0;
    display: flex;
    flex-direction: column;
    padding-bottom:15px;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
 
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
);

const TriggerButton = styled('button')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 150ms ease;
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }

    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }
    &:focus-visible {
      box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
      outline: none;
    }
  `,
);
