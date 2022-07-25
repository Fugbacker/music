import Header from "../components/header/header"
import Search from "../components/search/search"
import Footer from "../components/footer/footer"
import MainContent from "../components/mainContent/main"
import TopList from "../components/topList/topList"

export default function Main() {
  return (
    <>
      {/* <Head>
        <title>mkdfond.ru - справочная информация об объектах недвижимости онлайн, фонд капитального ремонта|Поиск и проверка объекта недвижимости по адресу или кадастровому номеру, реест многоквартирных домов</title>
        <meta name="description" content="Справочная информация о недвижимости онлайн по кадастровому номеру или адресу. Информация из Росреестра, ЖКХ, реестра многоквартирнных домов и фонда капитального ремонта"/>
        <meta name="keywords" content="Поиск и проверка объекта недвижимости по адресу или кадастровому номеру | mkdfond.ru - справочная ифнормация об объектах недвижимости онлайн"/>
        <meta property="og:url" content="/"/>
        <meta property="og:image" content="https://mkdfond.ru/images/oghouse.jpg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:title" content="mkdfond.ru - справочная информация об объектах недвижимости онлайн|Поиск и проверка объекта недвижимости по адресу или кадастровому номеру"/>
        <meta property="og:description" content="Справочная информация о недвижимости онлайн по кадастровому номеру или адресу. Информация из Росреестра, ЖКХ, реестра многоквартирнных домов и реестра капитального ремонта"/>
        <meta name="twitter:card" content='summary'/>
        <meta name="twitter:title" content="mkdfond.ru - справочная ифнормация об объектах недвижимости онлайн|Поиск и проверка объекта недвижимости по адресу или кадастровому номеру"/>
        <meta name="twitter:description" content="Справочная информация о недвижимости онлайн по кадастровому номеру или адресу. Информация из Росреестра, ЖКХ, реестра многоквартирнных домов и реестра капитального ремонта"/>
        <meta name="yandex-verification" content="642b69c02162fe43" />
        <meta name="google-site-verification" content="d7nM5co9tCDgOHbh1cEhBWccqxN65ZuWuXfhRq0Z4bQ" />
      </Head> */}
      <div className="first">
        <Header />
        <div className="main">
          <div className="mainFirst">
            <div className="content">
              <h1 className="main_descr">
                  Качаем и слушаем любимые треки
              </h1>
              <Search />
              <MainContent />
            </div>
          </div>
          <div className="trackList">
            <div className="content">
              <TopList />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
