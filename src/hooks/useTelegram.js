const tg = window.Telegram.WebApp;

export function useTelegram(){
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () =>{
        console.log(tg.MainButton.isVisible);
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user
    }
}