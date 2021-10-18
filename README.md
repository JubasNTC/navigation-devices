# Navigation devices API

### About application

<p>API for getting information about navigation devices.</p>

### Required software
For the application to work correctly, you need to install the following software:
```
docker
docker-compose
```

### Pre-setup

Сreate a .env file in the root directory and fill in your data in it, following the example below.
```
POSTGRES_USER=root
POSTGRES_PASSWORD=password
```

### Build and run containers

Use following command in terminal.
```
docker-compose --env-file ./.env up
```
or
```
docker-compose up
```

### Supported endpoints

Create new user
```
/api/users
method: POST
body: {
  "email": "USER_EMAIL",
  "fullName": "USER_FULL_NAME"
}
```

Getting user by id
```
/api/users/:id
method: GET
```

Deleting user by id
```
/api/users/:id
method: DELETE
```

Create new device
```
/api/devices
method: POST
body: {
  "user_email": "USER_EMAIL",
  "mас": "MAC_ADDRESS",
  "type": "DEVICE_TYPE" // ble || wifi || locator || wifi_rt
}
```

Getting device by id
```
/api/devices/:id
method: GET
```

Deleting device by id
```
/api/devices/:id
method: DELETE
```

### TODO
- Add support swagger
- Add normal logging 
