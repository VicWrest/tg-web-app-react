const tg = window.Telegram.WebApp;

export function useTelegram(){
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
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
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id //уникальный id сеанса, необходим для передачи сообщений 
        //боту от имени пользователя 
    }
}