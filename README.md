# Metal Helper

Минимальная рабочая версия приложения Metal Helper.

## Структура
- `frontend/` — React Native приложение
- `backend/` — Node.js сервер
- `.github/workflows/build-android.yml` — сборка APK через GitHub Actions

## Запуск локально
1. Установить Node.js и Yarn
2. В `frontend/` выполнить `yarn install`
3. Для запуска фронта: `yarn start`
4. Для запуска бэка: `node backend/index.js`
