### REST API Documentation

## Table of Contents

- [Authentication](#authentication)
  - [Login](#login)
  - [Logout](#logout)
  - [Get Logged-in User](#get-logged-in-user)
- [Users](#users)
  - [Get All Users](#get-all-users-admin-only)
  - [Get User by ID](#get-user-by-id-admin-only)
  - [Create User](#create-user)
  - [Update User](#update-user-admin-only)
  - [Delete User](#delete-user-admin-only)
- [Company Profiles](#company-profiles)
  - [Get All Company Profiles](#get-all-company-profiles-admin-only)
  - [Get Company Profile by ID](#get-company-profile-by-id-admin-only)
  - [Create Company Profile](#create-company-profile-admin-or-mitra-only)
  - [Update Company Profile](#update-company-profile-admin-or-mitra-only)
  - [Delete Company Profile](#delete-company-profile-admin-or-mitra-only)
- [Services](#services)
  - [Get All Services](#get-all-services)
  - [Get Service by ID](#get-service-by-id)
  - [Create Service](#create-service-admin-or-mitra-only)
  - [Update Service](#update-service-admin-or-mitra-only)
  - [Delete Service](#delete-service-admin-or-mitra-only)

## Authentication

### Login

- **URL:** `/login`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "admin@example.com",
    "password": "password"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "uuid": "user-uuid",
      "name": "User Name",
      "email": "admin@example.com",
      "role": "admin"
    }
    ```
- **Error Responses:**
  - **Code:** 404
  - **Content:**
    ```json
    {
      "msg": "User Tidak Ditemukan"
    }
    ```
  - **Code:** 400
  - **Content:**
    ```json
    {
      "msg": "Password Salah"
    }
    ```

### Logout

- **URL:** `/logout`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "msg": "Anda Telah logOut"
    }
    ```
- **Error Responses:**
  - **Code:** 400
  - **Content:**
    ```json
    {
      "msg": "Tidak Dapat logOut"
    }
    ```

### Get Logged-in User

- **URL:** `/me`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "uuid": "user-uuid",
      "name": "User Name",
      "email": "user@example.com",
      "role": "admin"
    }
    ```
- **Error Responses:**
  - **Code:** 401
  - **Content:**
    ```json
    {
      "msg": "Mohon Login Ke Akun Anda"
    }
    ```
  - **Code:** 404
  - **Content:**
    ```json
    {
      "msg": "User Tidak Ditemukan"
    }
    ```

## Users

### Get All Users (Admin Only)

- **URL:** `/users`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <admin-token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    [
      {
        "uuid": "user-uuid",
        "name": "User Name",
        "email": "user@example.com",
        "role": "admin"
      },
      ...
    ]
    ```

### Get User by ID (Admin Only)

- **URL:** `/users/:id`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <admin-token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "uuid": "user-uuid",
      "name": "User Name",
      "email": "user@example.com",
      "role": "admin"
    }
    ```

### Create User

- **URL:** `/users`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Arrafi",
    "email": "arrafi@gmail.com",
    "password": "password",
    "confirmPassword": "password",
    "role": "admin"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "msg": "Register Berhasil"
    }
    ```

### Update User (Admin Only)

- **URL:** `/users/:id`
- **Method:** `PATCH`
- **Headers:**
  - `Authorization: Bearer <admin-token>`
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Arrafi Updated",
    "email": "arrafi.updated@gmail.com",
    "password": "newpassword",
    "confirmPassword": "newpassword",
    "role": "admin"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "msg": "User Updated"
    }
    ```

### Delete User (Admin Only)

- **URL:** `/users/:id`
- **Method:** `DELETE`
- **Headers:**
  - `Authorization: Bearer <admin-token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "msg": "User Deleted"
    }
    ```

## Company Profiles

### Get All Company Profiles (Admin Only)

- **URL:** `/company-profiles`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <admin-token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    [
      {
        "uuid": "company-uuid",
        "name": "Company Name",
        "address": "Company Address",
        "phone": "081234567890",
        "User": {
          "name": "Admin Name",
          "email": "admin@example.com"
        }
      },
      ...
    ]
    ```

### Get Company Profile by ID (Admin Only)

- **URL:** `/company-profiles/:id`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <admin-token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "uuid": "company-uuid",
      "name": "Company Name",
      "address": "Company Address",
      "phone": "081234567890",
      "Services": [
        {
          "uuid": "service-uuid",
          "name": "Service Name",
          "price": 300000,
          "details": "Service Details"
        },
        ...
      ],
      "User": {
        "name": "Admin Name",
        "email": "admin@example.com"
      }
    }
    ```

### Create Company Profile (Admin or Mitra Only)

- **URL:** `/company-profiles`
- **Method:** `POST`
- **Headers:**
  - `Authorization: Bearer <admin-or-mitra-token>`
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Nama Perusahaan",
    "address": "Alamat Perusahaan",
    "phone": "081234567890"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "msg": "Company Profile Created Successfully"
    }
    ```

### Update Company Profile (Admin or Mitra Only)

- **URL:** `/company-profiles/:id`
- **Method:** `PATCH`
- **Headers:**
  - `Authorization: Bearer <admin-or-mitra-token>`
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Nama Perusahaan Updated",
    "address": "Alamat Perusahaan Updated",
    "phone": "081234567891"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "msg": "Update Company Profile Sukses"
    }
    ```

### Delete Company Profile (Admin or Mitra Only)

- **URL:** `/company-profiles/:id`
- **Method:** `DELETE`
- **Headers:**
  - `Authorization: Bearer <admin-or-mitra-token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "msg": "Delete Company Profile Sukses"
    }
    ```



## Services

### Get All Services

- **URL:** `/services`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    [
      {
        "uuid": "service-uuid",
        "name": "Service Name",
        "price": 300000,
        "details": "Service Details",
        "CompanyProfile": {
          "name": "Company Name",
          "address": "Company Address",
          "phone": "081234567890"
        }
      },
      ...
    ]
    ```

### Get Service by ID

- **URL:** `/services/:id`
- **Method:** `GET`
- **Headers:**
  - `Authorization: Bearer <token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "uuid": "service-uuid",
      "name": "Service Name",
      "price": 300000,
      "details": "Service Details",
      "CompanyProfile": {
        "name": "Company Name",
        "address": "Company Address",
        "phone": "081234567890"
      }
    }
    ```

### Create Service (Admin or Mitra Only)

- **URL:** `/services`
- **Method:** `POST`
- **Headers:**
  - `Authorization: Bearer <admin-or-mitra-token>`
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Service Name",
    "price": 300000,
    "details": "Service Details"
  }
  ```
- **Success Response:**
  - **Code:** 201
  - **Content:**
    ```json
    {
      "msg": "Service Created Successfully"
    }
    ```

### Update Service (Admin or Mitra Only)

- **URL:** `/services/:id`
- **Method:** `PATCH`
- **Headers:**
  - `Authorization: Bearer <admin-or-mitra-token>`
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Service Name Updated",
    "price": 350000,
    "details": "Service Details Updated"
  }
  ```
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "msg": "Update Service Sukses"
    }
    ```

### Delete Service (Admin or Mitra Only)

- **URL:** `/services/:id`
- **Method:** `DELETE`
- **Headers:**
  - `Authorization: Bearer <admin-or-mitra-token>`
- **Success Response:**
  - **Code:** 200
  - **Content:**
    ```json
    {
      "msg": "Delete Service Sukses"
    }
    ```

## Authentication & Authorization

- Semua endpoint (kecuali `/login`) membutuhkan header `Authorization` dengan format `Bearer <token>` untuk memastikan bahwa permintaan dibuat oleh pengguna yang terautentikasi.
- Endpoint tertentu memiliki batasan akses berdasarkan peran pengguna (`admin`, `mitra`, atau `user`).
