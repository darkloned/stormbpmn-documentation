import comp from "C:/Users/kotov/stormbpmn-documentation/src/.vuepress/.temp/pages/enterprise/setup.html.vue"
const data = JSON.parse("{\"path\":\"/enterprise/setup.html\",\"title\":\"Установка\",\"lang\":\"ru-RU\",\"frontmatter\":{\"order\":1,\"dir\":{\"link\":true},\"index\":true,\"icon\":\"computer\"},\"headers\":[{\"level\":2,\"title\":\"Get started\",\"slug\":\"get-started\",\"link\":\"#get-started\",\"children\":[{\"level\":3,\"title\":\"Настройка базы\",\"slug\":\"настроика-базы\",\"link\":\"#настроика-базы\",\"children\":[]},{\"level\":3,\"title\":\"Настройка приложения через .ENV-переменные\",\"slug\":\"настроика-приложения-через-env-переменные\",\"link\":\"#настроика-приложения-через-env-переменные\",\"children\":[]}]},{\"level\":2,\"title\":\"Создание административной учетной записи\",\"slug\":\"создание-административнои-учетнои-записи\",\"link\":\"#создание-административнои-учетнои-записи\",\"children\":[{\"level\":3,\"title\":\"Настройка авторизации\",\"slug\":\"настроика-авторизации\",\"link\":\"#настроика-авторизации\",\"children\":[]}]},{\"level\":2,\"title\":\"Полноценная установка\",\"slug\":\"полноценная-установка\",\"link\":\"#полноценная-установка\",\"children\":[{\"level\":3,\"title\":\"Балансер\",\"slug\":\"балансер\",\"link\":\"#балансер\",\"children\":[]},{\"level\":3,\"title\":\"S3-хранилище\",\"slug\":\"s3-хранилище\",\"link\":\"#s3-хранилище\",\"children\":[]},{\"level\":3,\"title\":\"Plantuml-сервер\",\"slug\":\"plantuml-сервер\",\"link\":\"#plantuml-сервер\",\"children\":[]},{\"level\":3,\"title\":\"Подключить STORM к системам мониторинга и обеспечить резервное копирование\",\"slug\":\"подключить-storm-к-системам-мониторинга-и-обеспечить-резервное-копирование\",\"link\":\"#подключить-storm-к-системам-мониторинга-и-обеспечить-резервное-копирование\",\"children\":[]},{\"level\":3,\"title\":\"Хардендинг и SIEM\",\"slug\":\"хардендинг-и-siem\",\"link\":\"#хардендинг-и-siem\",\"children\":[]},{\"level\":3,\"title\":\"Выбрать провайдер почты\",\"slug\":\"выбрать-проваидер-почты\",\"link\":\"#выбрать-проваидер-почты\",\"children\":[]}]}],\"git\":{\"createdTime\":1729001299000,\"updatedTime\":1729021359000,\"contributors\":[{\"name\":\"Denis Kotov\",\"email\":\"31292696+KotskinKotskin@users.noreply.github.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":3.64,\"words\":1093},\"filePathRelative\":\"enterprise/setup.md\",\"localizedDate\":\"15 октября 2024 г.\",\"excerpt\":\"\\n<p>Stormbpmn поставляется как docker-контейнер из приватного репозитория, который включается в себя и front, и back. Установка заключается в правильном указании .ENV-перменных внутрь контейнера, поднятии смежных контейнеров (если необходимо), и манипуляции в административном интерфейсе.</p>\\n<h2>Get started</h2>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
