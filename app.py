from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder="compiled_js", static_url_path="/compiled_js")

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/TypeScript/<path:filename>')
def serve_typescript(filename):
    return send_from_directory('TypeScript', filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)