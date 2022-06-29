#!/bin/sh

find /data -mtime +2 -name "*.log" -exec rm -rf {} \;