const pool = require("../db");


// post(adduser)
const addUser = async (req, res) => {
  const { name, email , age , city } = req.body;
  console.log(req.body)
  console.log("hi");
  const result = await pool.query(
    "INSERT INTO users (name, email, age, city) VALUES ($1, $2,$3 ,$4) RETURNING *",
    [name, email , age , city ]
  );

  res.json(result.rows[0]);
};


// delete
const deleterow = async(req,res)=>{
  try{
    const result = await pool.query(
      "delete from users where id in (2,3) RETURNING* "
    )

    console.log("rows deleted : ", result.rows)
    res.status(200).json({meassge : "rows deleted sucessfully" , deleted : result.rows});
  }
  catch(err){
    res.status(500).json({error : err.meassge ,error:  err.code})
  }
}




// get (getusers)
const getUsers = async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
};

module.exports = { addUser, getUsers , deleterow };

