import userModel from "../models/userModel.js";


// add item to user cart

export const addToCart=async(req, res)=>{

    try {
        let userData= await userModel.findById(req.body.userId);
        let cartData= await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId]= 1;
        }
        else{ 
            cartData[req.body.itemId]+=1;
        }
        await UserModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Added To Cart"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"});
    }
} 

//remove items from user cart
export const removeFromCart= async()=>{
    try {
        let userData= await userModel.findById(req.body.userId);
        let cartData= await userModel.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId]-=1;            
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"removed from cart"});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"});
        
    }

}

// fetch user cart data
export const getCart= async (req, res) => {
    try {
        let userData= await userModel.findById(req.body.userId);
        let cartData= await userData.cartData;
        res.json({success:true,message: cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"});
    }   
}



/** edite */

///add item to user cart

// const MAX_CART_ITEM_QUANTITY = 10;

// export const addToCart = async (req, res) => {
//   try {
//     const userId = req.user?.id;
//     const { itemId, quantity: quantityToAdd = 1 } = req.body;

//     if (!userId) {
//       return res.status(401).json({ success: false, message: "المستخدم غير مصادق عليه." });
//     }

//     if (!itemId) {
//       return res.status(400).json({ success: false, message: "معرف المنتج مفقود." });
//     }

//     if (!Number.isInteger(quantityToAdd) || quantityToAdd <= 0) {
//       return res.status(400).json({ success: false, message: "الكمية يجب أن تكون عددًا صحيحًا موجبًا." });
//     }

//     const productData = await foodModel.findById(itemId);
//     if (!productData) {
//       return res.status(404).json({ success: false, message: "المنتج غير موجود." });
//     }

//     const userData = await userModel.findById(userId).select('cartData');
//     if (!userData) {
//       return res.status(404).json({ success: false, message: "المستخدم غير موجود." });
//     }

//     const cart = userData.cartData || [];
//     const existingCartItem = cart.find(item => item.productId.toString() === itemId);
//     const currentQuantityInCart = existingCartItem ? existingCartItem.quantity : 0;
//     const newTotalQuantity = currentQuantityInCart + quantityToAdd;

//     if (newTotalQuantity > MAX_CART_ITEM_QUANTITY) {
//       return res.status(400).json({
//         success: false,
//         message: `لا يمكن أن تتجاوز كمية المنتج ${MAX_CART_ITEM_QUANTITY} في السلة.`,
//       });
//     }

//     if (newTotalQuantity > productData.stock) {
//       return res.status(400).json({
//         success: false,
//         message: `الكمية المطلوبة غير متوفرة في المخزون. المتوفر حاليًا: ${productData.stock}`,
//       });
//     }

//     let updatedUser;
//     if (existingCartItem) {
//       updatedUser = await userModel.findOneAndUpdate(
//         { _id: userId, 'cartData.productId': itemId },
//         { $inc: { 'cartData.$.quantity': quantityToAdd } },
//         { new: true }
//       );
//     } else {
//       updatedUser = await userModel.findOneAndUpdate(
//         { _id: userId },
//         { $push: { cartData: { productId: itemId, quantity: quantityToAdd } } },
//         { new: true }
//       );
//     }

//     if (!updatedUser) {
//       return res.status(500).json({ success: false, message: "فشل تحديث السلة." });
//     }

//     res.status(200).json({
//       success: true,
//       message: "تم تحديث السلة بنجاح.",
//       cartData: updatedUser.cartData,
//     });

//   } catch (error) {
//     console.error("خطأ في addToCart:", error);
//     if (error.name === 'CastError') {
//       return res.status(400).json({ success: false, message: "معرف المنتج أو المستخدم غير صالح." });
//     }
//     res.status(500).json({ success: false, message: "حدث خطأ في الخادم أثناء تحديث السلة." });
//   }
// };


// //remove items from user cart

// export const removeFromCart = async (req, res) => {
//   try {
//     const userId = req.user?.id;
//     const { itemId } = req.body;

//     // 1. التحقق الأساسي من المدخلات والمصادقة
//     if (!userId) {
//       return res.status(401).json({ success: false, message: "المستخدم غير مصادق عليه." });
//     }
//     if (!itemId) {
//       return res.status(400).json({ success: false, message: "معرف المنتج مفقود." });
//     }

//     // 2. التحقق من وجود المنتج في سلة المستخدم وتحديد الكمية الحالية
//     // نستخدم findOne للبحث عن المستخدم والتأكد من وجود المنتج المحدد في مصفوفة cartData
//     // ونستخدم الإسقاط (projection) 'cartData.$' لجلب العنصر المطابق فقط من المصفوفة
//     const userWithItem = await userModel.findOne(
//       { _id: userId, 'cartData.productId': itemId },
//       { 'cartData.$': 1, _id: 0 } // جلب العنصر المطابق فقط + عدم جلب _id هنا
//     );

//     // إذا لم يتم العثور على المستخدم أو المنتج في سلته
//     if (!userWithItem || !userWithItem.cartData || userWithItem.cartData.length === 0) {
//       // قبل إرجاع الخطأ، نتأكد بسرعة أن المستخدم نفسه موجود (لتفريق الخطأ)
//       const userExists = await userModel.findById(userId).select('_id');
//       if (!userExists) {
//           return res.status(404).json({ success: false, message: "المستخدم غير موجود." });
//       }
//       // إذا كان المستخدم موجوداً ولكن المنتج ليس في السلة
//       return res.status(404).json({ success: false, message: "المنتج غير موجود في السلة." });
//     }

//     const currentQuantity = userWithItem.cartData[0].quantity;
//     let updateQuery;

//     // 3. تحديد وتنفيذ عملية التحديث الذرية المناسبة
//     if (currentQuantity > 1) {
//       // إذا كانت الكمية أكبر من 1، قم بتقليلها بمقدار 1 باستخدام $inc
//       // نستخدم '$' الموضعي (positional operator) لتحديث العنصر الصحيح في المصفوفة
//       updateQuery = {
//         $inc: { 'cartData.$.quantity': -1 }
//       };
//       // الشرط هنا هو نفس الشرط المستخدم في findOne للتأكد من تحديث العنصر الصحيح
//       await userModel.updateOne({ _id: userId, 'cartData.productId': itemId }, updateQuery);

//     } else {
//       // إذا كانت الكمية 1، قم بإزالة المنتج بالكامل من مصفوفة السلة باستخدام $pull
//       updateQuery = {
//         $pull: { cartData: { productId: itemId } }
//       };
//       await userModel.updateOne({ _id: userId }, updateQuery); // الشرط هنا يكفي userId
//     }

//     // 4. جلب بيانات السلة المحدثة لإرجاعها في الاستجابة
//     // نحتاج إلى جلبها مرة أخرى لأن updateOne لا تُرجع المستند المحدث تلقائيًا بنفس الطريقة
//     const updatedUser = await userModel.findById(userId).select('cartData');

//     res.status(200).json({
//       success: true,
//       // يمكن استخدام نفس الرسالة أو رسالة أكثر عمومية مثل "تم تحديث السلة بنجاح"
//       message: "تم إزالة المنتج من السلة.",
//       // التأكد من وجود updatedUser قبل الوصول إلى cartData
//       cartData: updatedUser ? updatedUser.cartData : [],
//     });

//   } catch (error) {
//     console.error("خطأ في removeFromCart:", error);
//     res.status(500).json({ success: false, message: "حدث خطأ في الخادم." });
//   }
// };

// //fetch user cart data

// export const getCart = async (req, res) => {
//     try {
//       // 1. الحصول على معرف المستخدم من كائن req.user الذي تم إرفاقه بواسطة وسيط المصادقة
//       const userId = req.user?.id;
  
//       // 2. التحقق من أن المستخدم مصادق عليه (أن userId موجود)
//       if (!userId) {
//         // إذا لم يكن المستخدم مصادقاً عليه، أرجع خطأ 401 Unauthorized
//         return res.status(401).json({ success: false, message: "المستخدم غير مصادق عليه." });
//       }
  
//       // 3. جلب بيانات المستخدم مع تحديد حقل cartData فقط لتحسين الأداء
//       const userData = await userModel.findById(userId).select('cartData');
  
//       // 4. التحقق من العثور على بيانات المستخدم في قاعدة البيانات
//       if (!userData) {
//         // إذا لم يتم العثور على المستخدم (نادر الحدوث إذا تجاوز المصادقة)، أرجع خطأ 404 Not Found
//         // قد يشير هذا إلى مشكلة في تزامن البيانات أو حذف المستخدم بعد تسجيل الدخول مباشرة
//         console.warn(`تحذير: لم يتم العثور على بيانات المستخدم بالمعرف ${userId} بالرغم من المصادقة.`);
//         return res.status(404).json({ success: false, message: "المستخدم غير موجود." });
//       }
  
//       // 5. إرسال الاستجابة الناجحة مع بيانات السلة
//       // نستخدم userData.cartData || [] لضمان إرجاع مصفوفة دائماً، حتى لو كانت السلة فارغة أو غير معرفة في المستند
//       res.status(200).json({
//         success: true,
//         message: "تم جلب بيانات السلة بنجاح.",
//         cartData: userData.cartData || [], // ضمان إرجاع مصفوفة
//       });
  
//     } catch (error) {
//       // 6. معالجة أي أخطاء غير متوقعة أثناء العملية
//       console.error("خطأ في getCart:", error);
//       res.status(500).json({ success: false, message: "حدث خطأ في الخادم أثناء جلب السلة." });
//     }
//   };