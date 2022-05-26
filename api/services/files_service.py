import os
import shutil
from werkzeug.utils import secure_filename

def upload_file(path, file):
    try:
        print(path)
        with open(path + secure_filename(file.filename), "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return True
    except IOError as e:
        return False

def create_folder(path):
    exists = os.path.exists(path)

    if not exists:
        os.makedirs(path)
        return True
    
    else:
        return False
    