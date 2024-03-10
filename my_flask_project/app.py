
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    title = "Inicio"
    return render_template("index.html", title=title)

@app.route("/contacto")
def contacto():
    title = "Contacto"
    return render_template("Contacto.html", title=title)

@app.route("/about")
def about():
    title = "about"
    return render_template("about.html", title=title)

if __name__ == "__main__":
  app.run(debug=True, port=3000)
