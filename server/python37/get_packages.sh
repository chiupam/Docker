#!/usr/bin/env sh

cd /usr/local/lib/python3.7/site-packages || exit
zip -r env.zip .
if [ -f /serverless/env.zip ]; then
  # shellcheck disable=SC2046
  mv /serverless/env.zip /serverless/env3.7-$(date +%m%d%H%M).zip
fi
mv -f env.zip /serverless
cd /serverless || exit
