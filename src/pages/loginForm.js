import React from "react";

import SVG3 from "../components/undraw_profile_pic_ic5t.svg";
import Person from "../components/undraw_personalization_triu.svg";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
const LoginForm = () => {
	return (
		<Grid container justify="center" alignItems="center">
			<Grid item xs={6}>
				<img src={Person} style={{ height: 500 }} alt="Personal Auth" />
			</Grid>
			<Grid item xs={6} justify="center" alignItems="center">
				{/* <img
					src="src\components\wave.png"
					style={{ height: "100vh" }}
				></img> */}
				<img
					src={SVG3}
					alt="Profile Avatar"
					style={{ height: 200, width: 200, paddingBottom: 50 }}
				/>
				<h1
					style={{
						fontSize: 30,
						fontFamily: "Poppins",
						paddingBottom: 20,
					}}
				>
					Welcome
				</h1>
				<form autoComplete="off" noValidate style={{ width: 350 }}>
					<TextField
						label="Username"
						style={{
							width: 350,
							fontfamily: "Poppins",
							paddingBottom: 30,
						}}
					></TextField>
					<br />
					<TextField
						label="Password"
						style={{ width: 350, fontFamily: "Poppins" }}
						fullWidth
					/>
					<br />
					<a
						href="#"
						style={{
							textAlign: "right",
							display: "block",
							textDecoration: "none",
							fontFamily: "Poppins",
						}}
					>
						Forgot Password?
					</a>
					<br />
					<div
						style={{
							display: "block",
							textAlign: "center",
							alignItems: "center",
							justifyContent: "center",
							alignContent: "center",
						}}
					>
						<Button
							style={{
								width: 150,
								backgroundColor: "rgb(108, 99, 255) ",
								fontFamily: "Poppins",
								borderRadius: 30,
								textAlign: "center",
								width: 300,
								color: "#fff",
							}}
						>
							Login
						</Button>
					</div>
				</form>
			</Grid>
		</Grid>
	);
};

export default LoginForm;
