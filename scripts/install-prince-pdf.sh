#! /bin/sh

apt-get update && apt-get install --no-install-recommends -y \
      curl \
      ca-certificates \
      fonts-tlwg-garuda-otf \
      fonts-lohit-orya \
      fonts-lohit-mlym \
      fonts-lohit-knda \
      fonts-lohit-telu \
      fonts-lohit-taml \
      fonts-lohit-gujr \
      fonts-lohit-guru \
      fonts-lohit-beng-bengali \
      fonts-lohit-deva \
      fonts-baekmuk \
      fonts-ipafont-mincho \
      fonts-arphic-uming \
      fonts-opensymbol \
      fonts-liberation2 && \
    curl --proto '=https' --tlsv1.2 -O https://www.princexml.com/download/prince_15.2-1_debian12_amd64.deb && \
    apt-get install -y ./prince_15.2-1_debian12_amd64.deb && \
    rm prince_15.2-1_debian12_amd64.deb && \
    apt-get purge -y curl && \
    apt-get autoremove -y && apt-get clean && \
    ln -sf /etc/ssl/certs/ca-certificates.crt /usr/lib/prince/etc/curl-ca-bundle.crt
