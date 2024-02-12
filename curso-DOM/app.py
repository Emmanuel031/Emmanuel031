from flask import Flask, render_template, request, redirect
from wtforms import StringField, PasswordField, SubmitField
from flask_wtf import FlaskForm

app = Flask(__name__)

app.config["SECRET_KEY"] = "Clave Secreta"

@app.route("/", methods=['GET','POST'])
def login():
    if request.method == "POST":
        username = request.form['username']
        password = request.form['password']
        return render_template("Bienvenida.html",username=username, password=password)
    
    return render_template("login.html")






if __name__ == '__main__':
    app.run(debug=True)

