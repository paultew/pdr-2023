# Note that openssl is installed by Git For Windows

# Create the root key
#####openssl ecparam -out rootCA.key -name prime256v1 -genkey
openssl genrsa -des3 -out rootCA.key 4096

# Create the root Certificate Signing Request (CSR)
openssl req -new -sha256 -key rootCA.key -subj "/CN=Self-Signing-Root-CA/C=GB/ST=Cambridgeshire/L=Cambridge/O=Self Signed" -out rootCA.csr

# Generate the Root Certificate
openssl x509 -req -sha256 -days 365 -in rootCA.csr -signkey rootCA.key -out rootCA.crt

# Import the Root Certificate
Import-Certificate -FilePath .\rootCA.crt -CertStoreLocation Cert:\LocalMachine\Root

# Create the server key
#####openssl ecparam -out localhost.key -name prime256v1 -genkey
openssl genrsa -out localhost.key 2048

# Create the server Certificate Signing Request (CSR)
openssl req -new -sha256 -key localhost.key -subj "/CN=localhost/C=GB/ST=Cambridgeshire/L=Cambridge/O=Self Signed" -out localhost.csr

# Generate the certificate with the CSR and the key and sign it with the CA's root key
openssl x509 -req -in localhost.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out localhost.crt -days 365 -sha256 -extfile localhost.ext

# Verify the certificate
openssl x509 -in localhost.crt -text -noout

# Convert certificate chain for importing into IIS
openssl pkcs12 -inkey localhost.key -in localhost.crt -export -out localhost.pfx -name "Localhost Test Certificate" 

# Import the certificate
#$cred = Get-Credential -UserName 'Enter password below' -Message 'Enter password below'
#Import-PfxCertificate -FilePath localhost.pfx Cert:\LocalMachine\Root -Password $cred.Password
