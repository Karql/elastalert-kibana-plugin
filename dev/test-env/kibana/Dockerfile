FROM docker.elastic.co/kibana/kibana:8.6.1

COPY ./plugins/elastalertKibanaPlugin-8.6.1.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.6.1.zip
