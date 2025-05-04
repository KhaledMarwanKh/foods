# 🍽️ Food Delivery API

This project provides a RESTful API for a food delivery system, including user authentication, cart management, food listing, and order processing.

---

## 🧭 API Endpoints

### 👤 User Routes (`/api/user`)

| Method | Endpoint     | Description           | Auth Required |
|--------|--------------|-----------------------|----------------|
| POST   | `/login`     | User login            | ❌ No          |
| POST   | `/register`  | User registration     | ❌ No          |
| POST   | `/logout`    | User logout           | ❌ No          |

---

### 🛒 Cart Routes (`/api/cart`)

| Method | Endpoint     | Description                    | Auth Required |
|--------|--------------|--------------------------------|----------------|
| POST   | `/add`       | Add item to cart               | ✅ Yes         |
| POST   | `/remove`    | Remove item from cart          | ✅ Yes         |
| POST   | `/get`       | Get current user's cart        | ✅ Yes         |

---

### 🍔 Food Routes (`/api/food`)

| Method | Endpoint     | Description                        | Auth Required |
|--------|--------------|-------------------------------------|----------------|
| POST   | `/add`       | Add a new food item with an image  | ❌ No          |
| GET    | `/list`      | Get list of available food items   | ❌ No          |
| POST   | `/remove`    | Remove a food item                 | ❌ No          |

---

### 📦 Order Routes (`/api/order`)

| Method | Endpoint       | Description                         | Auth Required |
|--------|----------------|--------------------------------------|----------------|
| POST   | `/place`       | Place a new order                    | ✅ Yes         |
| POST   | `/verify`      | Verify an order (e.g., payment)      | ❌ No          |
| POST   | `/userorders`  | Get orders of the logged-in user     | ✅ Yes         |
| GET    | `/list`        | Get list of all orders (admin use)   | ❌ No          |
| POST   | `/status`      | Update order status                  | ❌ No          |

---

## 🔐 Authentication

- `✅ Yes`: Requires a valid JWT token in the request header (`Authorization: Bearer <token>`).
- `❌ No`: Publicly accessible endpoint.

---

## 📸 Notes

- Food images are uploaded to the `uploads/` directory using `multer`.
- When adding food, the image should be sent as a `multipart/form-data` with field name `image`.
