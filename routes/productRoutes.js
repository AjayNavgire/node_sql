const express = require("express");
const router = express.Router();
// const db = require('../db/database');
const product = require("../controller/productController");

router.get('/products', product)

// router.get('/products', async (req, res) => {
//     try {
//         let { pageSize,
//             currentPage,
//             orderBy,
//             searchBy,
//             searchFields,
//             orderDir
//         } = req.query;

//         let limit = parseInt(pageSize, 10)
//         let offset = (parseInt(currentPage, 10) - 1) * limit
//         let query = `SELECT * FROM Products ORDER BY ${orderBy} ${orderDir} LIMIT ? OFFSET ?`
//         let params = [limit, offset]

//         if (searchBy.trim() !== "") {
//             query = `SELECT * FROM Products WHERE ${searchFields} LIKE ? ORDER BY ${orderBy} ${orderDir} LIMIT ? OFFSET ? `
//             params = [`%${searchBy}%`, limit, offset]
//         }
//         const product = await db.query(query, params);

//         let conuntQuery = `SELECT COUNT(*) as total FROM Products`;
//         let countParams = [];

//         if (searchBy.trim() !== "") {
//             conuntQuery = `SELECT COUNT(*) as total FROM Products WHERE ${searchFields} LIKE ?`;
//             countParams = [`%${searchBy}%`];
//         }

//         const [countResult] = await db.query(conuntQuery, countParams);     
//         const totalRecords = countResult[0].total;
//         const totalPages = totalRecords / limit

//         res.json({
//             totalRecords,
//             currentPage: parseInt(currentPage, 10),
//             pageSize: limit,
//             totalPages: totalPages == 0 ? 1 : Math.ceil(totalPages),
//             data: product

//         });

//     } catch (err) {
//         res.status(500).json({ message: `${err.message} : Error fetching products` });
//     }

// })

module.exports = router;