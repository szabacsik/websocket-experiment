Vagrant.configure("2") do |config|
    config.vm.box = "szabacsik/ubuntu"
    config.vm.provider "virtualbox"
    config.vm.network "private_network", ip: "192.168.100.100"
    config.vm.network "forwarded_port", guest: 80, host: 80
    config.vm.network "forwarded_port", guest: 8080, host: 8080
    config.vm.network "forwarded_port", guest: 9001, host: 9001
    config.vm.hostname = "server"
    config.vm.define "server"
    config.vm.provider :virtualbox do |vb|
        vb.name = "server"
        vb.memory = 2048
        vb.cpus = 1
    end
    config.vm.synced_folder ".", "/home/worker/attached", owner: "worker", group: "worker", :mount_options => ["dmode=777", "fmode=700", "uid=1000", "gid=1000"]
    #config.vm.synced_folder ".", "/vagrant", disabled: true
    config.ssh.username="worker"
    config.ssh.password="worker"
end