---
title: Ответы на часто задаваемые вопросы
---

# Ответы на часто задаваемые вопросы

## С чего начать
В зависимости от ваших навыков и потребностей, начало может быть разным:
* Вам нужна информация о возможностях устройств Wiren Board и схемы их подключения — смотрите [документацию](/docs/intro). В ней подробно описаны характеристики устройств и даны типовые схемы подключения. Частые вопросы по работе с нашим оборудованием   и общие рекомендации приведены ниже на данной странице.
* Вы начинающий и хотите узнать азы — почитайте нашу статью [Общие принципы проектирования умного дома](https://wirenboard.com/ru/pages/sh-principles/) и [статьи наших клиентов](https://wirenboard.com/ru/pages/articles/). В них описаны примеры реализованных проектов.
* Посмотрите [обучающие ролики](https://wirenboard.com/ru/pages/educational-videos/) от нас и партнёров.
* Вы разбираетесь в строительстве и электрике, но не знаете как подступиться к автоматизации — посмотрите реальные проекты нашего партнёра, компании [XIOT](https://xiot.ru):
  ** [Электрический щит для квартиры 200 м<sup>2</sup>](https://wirenboard.com/statics/content/files/5fb53c8992702.pdf)
  ** Автоматизация квартир: [56 м<sup>2</sup>](https://wirenboard.com/statics/content/files/6065db27f198b.pdf), [60 м<sup>2</sup>](https://wirenboard.com/statics/content/files/5f85b0427d359.pdf), [85 м<sup>2</sup>](https://wirenboard.com/statics/content/files/60f198d75b223.pdf), [87 м<sup>2</sup>](https://wirenboard.com/statics/content/files/5f7b0327c4c2e.pdf), [98 м<sup>2</sup>](https://wirenboard.com/statics/content/files/60752d2698a09.pdf), [100 м<sup>2</sup>](https://wirenboard.com/statics/content/files/60c3567a0fd43.pdf), [105 м<sup>2</sup>](https://wirenboard.com/statics/content/files/5f92809c4fd27.pdf), [199 м<sup>2</sup>](https://wirenboard.com/statics/content/files/5fb53bbbe8d08.pdf)
* Вам просто нужен кто-то, кто всё сделает «под ключ» — обратитесь к [нашим партнёрам](https://wirenboard.com/ru/pages/partners/).

## Подбор оборудования

* [[WB FAQ/wb-modules-overview | Обзор модулей Wirenboard ]]
* [[WB FAQ/smart-house-price | Оценка стоимости системы автоматизации "Умный дом"]]
* [[WB FAQ/smart-house-components | Рекомендации по выбору компонентов умного дома ]]
* [[WB FAQ/wb-equipment-selection | Подбор оборудования Wirenboard под задачи автоматизации ]]
* [[Replaces analog| Таблица замен стороннего оборудования на устройства Wiren Board]]
* [Примеры внедрений](https://wirenboard.com/ru/pages/solutions/)

## Выбор расходных материалов

* [[WB_FAQ/materials-electric-cables | Какие кабели использовать в проекте]]

## Технологии
* [[RS-485:Физическое подключение | Как правильно организовать шину RS-485]]
* [[WB_FAQ/RS-485-star-topology | Можно ли использовать топологию "звезда" у шины RS-485?]]
* [[WB_FAQ/1-wire-sensors-connection | Рекомендации по подключению датчиков 1-wire к контроллеру]]
* [[WB_FAQ/inductive-loads-control | Подключение индуктивных нагрузок (двигателей) к модулям реле]]

## Работа с контроллером

### Удалённый доступ
* [[Wiren Board Cloud| Wiren Board Cloud — сервис удалённого администрирования контроллеров Wiren Board]]
* [[Tailscale | Tailscale — удалённый доступ к контроллеру Wiren Board без своего VPN-сервера]]
* [[Wirenboard6:InstallingOnTheRemoteSite#OpenVPN|OpenVPN, WireGuard]]

### Обслуживание
* [[Wiren_Board_Software | Как обновить прошивку контроллера]]
  ###Настройка контроллера
* [[Time in the Wiren Board 6 controller | Как настроить дату, время и часовой пояс]]
* [[Networks | Как установить пароль на Wi-Fi]]
* [[GSM/GPRS | Как настроить мобильный интернет]]
* [[RS-485#Как ускорить опрос устройств | Как ускорить опрос устройств, подключённых к шине RS-485]]
* [Как обновить контроллер Wiren Board и прописать модули](https://youtu.be/eUUxqaUAP2w?t=164), видео от партнёра.
* [[Wb-mb-explorer | Утилита wb-mb-explorer]] — настройка последовательных портов, изменение параметров подключения и обновление прошивки Moidbus-устройств Wiren Board.
* [[Backup of Wiren Board controller settings | Резервное копирование настроек контроллера]]
* [[Ansible | Настройка контроллера с помощью Ansible]]

### Веб-интерфейс
* [[WB_FAQ/History-configuration-and-working | Архивация значений History (работа и настройка системы архивации)]]

### Установка и настройка стороннего ПО
* [[Node-Red | Как установить Node-RED]]
* [[Node-RED+Telegram | Как настроить Telegram-бота с помощью Node-RED]]
* [[Home-Assistant-Installation | Как установить Home Assistant на контроллер Wirenboard?]]

### Информация
* [[Controller Free Space| Свободное место на eMMC]]
* [[How_to_find_IP_address| IP-адрес контроллера]]

### Решение проблем
* [[WB6_root_password_recovery|Забыли пароль root]]
* [[Wiren_Board_Device_Modbus_Address|Как узнать modbus-адреса устройств на шине]]
* [[Wiren_Board_Software#update|Как сбросить контроллер к заводским настройкам]]
* [[WB_FAQ/flash-card-recognization-problems | Контроллер не распознает флеш-карту при обновлении прошивки или сбросе к заводским настройкам ]]
* [Как очистить историю измерений (History)](https://support.wirenboard.com/t/ochistka-history/1924)
* [[Enlarging_the_rootfs_partition |Кончилось место в корневом разделе]]

## Модули расширения
* [[WB_FAQ/OpenTherm-eBus-modules | Управление котлами по интерфейсам OpenTherm и eBus]]
* [[Backup_power_for_Wiren_Board_devices | Резервное питание для устройств Wiren Board]]

## Боковые модули ввода-вывода

## Работа с Modbus-модулями от Wirenboar
* [[WB Modbus Devices Firmware Update | Как обновить прошивку Modbus-устройства]]
* [[WB_FAQ/modbus-modules-max-quantity | Какое максимальное количество Modbus-модулей можно подключить к контроллеру?]]
* [[WB_FAQ/modbus-modules-communication-delays| Какие задержки при управлении возникают при работе с Modbus-модулем?]]
* [[WB_FAQ/modbus-modules-behind-gateway | Доступ к Modbus-модулям, расположенным за модулем WB-MGE или WB-MIO-E, из контроллера]]
* [Какие лампы на 12 В нужно купить, чтобы они работали с WB-MRGBW-D](https://support.wirenboard.com/t/wb-mrgbw-d-i-lampochki-12v/5862)
* [Как подключить Modbus-устройство Wiren Board к Arduino](https://support.wirenboard.com/t/kak-podklyuchit-tryohfaznyj-voltmetr-wb-map3ev-k-arduino/9717/3)
* [[Шлюз RS-485 в Wi-Fi]]
* [[WB_FAQ/modbus-modules-without-controller | Работа с Modbus-модулям от Wirenboard без контроллера]]

## Подключение сторонних устройств (Modbus, MQTT и т.д.)
* [[Connecting_Third_Party_Devices_to_Wiren_Board | Как подключить Modbus-устройство стороннего производителя к контроллеру?]]
* [[Thirdparty MQTT Device Connection| Подключение сторонних устройств по MQTT]]
