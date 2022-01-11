import LoginFormPage from "../LoginFormPage";
import SignUpFormPage from "../SignUpFormPage";

import "./AuthContainer.css";

export default function AuthContainer({ newAccount }) {
	return (
		<div id="contianer-boundingbox">
			<div id="container">
				<div className="main">
					<div className="MinimalFormFrame">
						<div className="minimal-frame">
							<div className="minimal-wrapper">
								<div className="minimal-body">
									{newAccount ? <SignUpFormPage /> : <LoginFormPage />}
								</div>
							</div>
							<div className="footer wrapper">
								<span id="tos-link">Terms of Service</span>
								<span id="privacy-link">Privacy Policy</span>
								<span className="footer-entry">Student Project by Nathaniel Tseng. No rights claimed.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
