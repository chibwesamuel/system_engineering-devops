#!/usr/bin/env python3
import os
import stat
from datetime import datetime

for filename in os.listdir('.'):
    file_stat = os.stat(filename)
    file_size = file_stat.st_size
    file_mode = stat.filemode(file_stat.st_mode)
    file_mtime = datetime.fromtimestamp(file_stat.st_mtime).strftime('%Y-%m-%d %H:%M:%S')
    
    print(f"{file_mode} {file_size:>10} {file_mtime} {filename}")