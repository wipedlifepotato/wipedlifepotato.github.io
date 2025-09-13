---
layout: default
title: Petri Project API & Lua Docs
---

# Petri — API и Lua Documentation

Petri — что-то больше, чем код.	 
Она поддерживает **HTTP API** через Go backend и **Lua-модификации** для кастомизации.

---

## 1. API (Swagger)

### Base

- **BasePath:** `/`
- **Version:** 1.0
- **Auth:** Bearer JWT (`Authorization` header)
- **Description:** API для управления пользователями, кошельками и администраторами.

### Основные Endpoints

#### 1.1 Auth

- **POST /auth** — логин, возвращает JWT
- **POST /register** — регистрация нового пользователя

#### 1.2 Profile

- **GET /profile** — получить профиль текущего пользователя
- **POST /profile** — обновить профиль
- **GET /profiles** — список профилей (с пагинацией)

#### 1.3 Wallet

- **GET /api/wallet** — получить балансы пользователя (BTC, XMR)
- **POST /api/wallet/bitcoinSend** — отправка BTC
- **POST /api/wallet/moneroSend** — отправка XMR (не реализовано)

#### 1.4 Admin

- **POST /api/admin/block** — блокировка пользователя
- **POST /api/admin/unblock** — разблокировка пользователя
- **POST /api/admin/make** — назначение админом
- **POST /api/admin/remove** — снятие прав администратора
- **POST /api/admin/update_balance** — установка нового баланса
- **GET /api/admin/wallets** — просмотр всех кошельков пользователя
- **POST /api/admin/transactions** — просмотр транзакций (с пагинацией)
- **GET /api/admin/check** — проверка, является ли пользователь админом

---

## 2. Lua Handlers

Petri позволяет создавать HTTP endpoint-ы через Lua:

```lua
register_handler("/path", function(req)
    -- your logic
    return '{"json":"response"}'
end)
````

* `req.method` → HTTP метод (`GET`, `POST`)
* `req.params` → query / form параметры
* Возвращаемое значение должно быть JSON-строкой

### Примеры Handlers

#### 2.1 Ping

```lua
register_handler("/ping", function(req)
    return '{"pong":true,"method":"'..req.method..'"}'
end)
```

#### 2.2 Echo

```lua
register_handler("/echo", function(req)
    local test = req.params["test"] or "nil"
    local foo  = req.params["foo"] or "nil"
    return '{"method":"'..req.method..'","test":"'..test..'","foo":"'..foo..'"}'
end)
```

#### 2.3 JWT-защищённый `/mywallet`

```lua
register_handler("/mywallet", function(req)
    local token = req.params["Authorization"]
    if not token then return '{"error":"missing token"}' end
    local user, err = get_user_from_jwt(token)
    if not user then return '{"error":"invalid token: '..err..'"}' end
    return '{"user_id":'..user.user_id..', "username":"'..user.username..'"}'
end)
```

---

## 3. Wallet / Balance Helpers (Lua)

```lua
local bal = get_balance(user_id, "BTC")
local ok, err = add_balance(user_id, "BTC", "0.01")
local ok, err = sub_balance(user_id, "BTC", "0.01")
```

* Поддержка BTC и XMR
* Atomic проверки и обновления через Go/DB

---

## 4. User & Admin Helpers (Lua)

```lua
local user = get_user("alice")
block_user(user.id)
unblock_user(user.id)
local ok = make_admin(42)
local ok = remove_admin(42)
local isAdm = is_admin(42)
```

---

## 5. Profiles (Lua)

```lua
local p = get_profile(42)
upsert_profile(42, "Alice Doe", "Blockchain dev", {"Go","Lua"}, "avatar.png")
local profiles = get_profiles(10, 0)
```

---

## 6. Config Globals (Lua)

```lua
print(config.PostgresHost)
print(config.RedisHost)
print(config.Port)
print(config.ElectrumHost)
print(config.MoneroAddress)
print(config.BitcoinAddress)
```

* Доступ к настройкам backend, базам данных, кошелькам и серверу.

---

## 7. Пример полного Lua Flow

```lua
local restored = restore_user("alice", "mnemonic words ...")
change_password("alice", "12345678")
local token = generate_jwt(restored.id, restored.username)
local wallet = get_balance(restored.id, "BTC")
print("JWT:", token, "BTC Balance:", wallet)
```

---

## 8. Итог

Petri объединяет:

* Swagger API для Go backend
* Lua handlers для расширяемости
* Управление пользователями, профилями и кошельками
* JWT-аутентификацию для защиты данных

