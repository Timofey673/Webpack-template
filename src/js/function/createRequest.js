async function createRequest(url){
    const response = await fetch(url) // Создаем переменую в которую передаем наши сетевые запросы на сервер (Mackoon) (для скачивания содержимого по адресу url). Метод fetch()делает сетевые запросы и получает информацию с сервера Оператор await используется для ожидания окончания Promise 
    return await response.json() // Создаем переменную в которую передаем полученный ответ в формате json  (декодирует ответ в формате JSON)}
}

export default createRequest // Возвращаем ответ в формате JSON 