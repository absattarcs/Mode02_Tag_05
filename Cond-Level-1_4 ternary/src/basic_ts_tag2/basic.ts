function isPasswordSecure(password: string): string {
            if (password.length >= 8) {
                return "Welcome to your Access.";
            } else {
                return "Password is too short.";
            }
        }

        // Event Listener für die Passwortprüfung
        document.getElementById("checkPassword")?.addEventListener("click", () => {
            const passwordInput = (document.getElementById("password") as HTMLInputElement).value;
            const resultElement = document.getElementById("result");
            
            if (resultElement) {
                resultElement.textContent = isPasswordSecure(passwordInput);
            }
        });