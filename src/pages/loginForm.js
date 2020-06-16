import React from "react";

import SVG3 from "../components/undraw_profile_pic_ic5t.svg";
import Person from "../components/undraw_personalization_triu.svg";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
const LoginForm = () => {
	return (
		<Grid container justify="center" alignItems="center">
			<Grid className="things" item xs={2}></Grid>
			<Grid className="things" item xs={4}>
				<img src={Person} style={{ height: 500 }} alt="Personal Auth" />
			</Grid>
			<Grid item xs={6} justify="center" alignItems="center">
				<div
					style={{
						justifyContent: "center",
						alignContent: "center",
						textAlign: "center",
					}}
					className="image"
				>
					<img
						src={SVG3}
						alt="Profile Avatar"
						style={{
							height: 200,
							width: 200,
							paddingBottom: 50,
						}}
					/>
				</div>
				<div
					style={{
						textAlign: "center",
						justify: "center",
					}}
				>
					<h1
						style={{
							fontSize: 30,
							fontFamily: "Poppins",
							paddingBottom: 20,
						}}
					>
						Welcome
					</h1>

					<form autoComplete="off" noValidate className="form">
						<TextField
							className="input"
							label="Username"
							style={{
								width: 350,
								fontfamily: "Poppins",
								paddingBottom: 30,
							}}
						></TextField>
						<br />
						<TextField
							className="input"
							label="Password"
							style={{ width: 350, fontFamily: "Poppins" }}
						/>
						<br />
						<a
							href="#"
							style={{
								textAlign: "center",
								display: "block",
								textDecoration: "none",
								fontFamily: "Poppins",
							}}
							className="forgot"
						>
							Forgot Password?
						</a>
						<br />
						<div
							style={{
								// display: "block",
								textAlign: "center",
								justify: "center",
								// alignContent: "center",
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
				</div>
			</Grid>
		</Grid>
	);
};

export default LoginForm;
