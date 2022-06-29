#!/bin/sh

dir_path=/data
find $dir_path -mtime +3 -name "*.log" -exec rm -rf {} \;