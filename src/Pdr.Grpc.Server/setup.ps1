$scriptPath = (Get-Location).Path
$rootPath = (Get-Item $scriptPath).Parent.Parent.FullName
$setupPath = Join-Path -Path $rootPath -ChildPath "setup"

$cred = Get-Credential -UserName 'Enter password below' -Message 'Enter the certificate password'
$pwd = ConvertFrom-SecureString -SecureString $cred.Password -AsPlainText

dotnet user-secrets set "Kestrel:Certificates:Default:Path" "$($setupPath)\localhost.pfx"
dotnet user-secrets set "Kestrel:Certificates:Default:KeyPath" $pwd
dotnet user-secrets set "Kestrel:Endpoints:https:Certificate:Path" "$($setupPath)\localhost.pfx"
dotnet user-secrets set "Kestrel:Endpoints:https:Certificate:Password" $pwd