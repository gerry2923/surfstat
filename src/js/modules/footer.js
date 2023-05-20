const shareBtn = document.querySelector('.main-footer__btn_share');
const shareContainer = document.querySelector('.main-footer__copy-link');
const copyLinkBtn = document.getElementById('copyLinkBtn');

const showLink = (evt)=> {
  if(shareContainer.classList.contains('main-footer__copy-link_hide')) {
    shareContainer.classList.remove('main-footer__copy-link_hide');
  }
};

export const setShowLinkBtnEvt = () => {
  shareBtn.addEventListener('pointerdown', showLink);
};

export const setCopyLinkBtnEvt = () => {
  copyLinkBtn.onpointerdown = function() {

    let text = document.getElementById('copyLinkInput').value;

    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });

    if (!shareContainer.classList.contains('.main-footer__copy-link_hide')) {
      shareContainer.classList.add('main-footer__copy-link_hide');
    }
  }
};
