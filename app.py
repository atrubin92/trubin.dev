from flask import Flask, render_template

app = Flask(__name__, static_folder="compiled_js", static_url_path="/compiled_js")

@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)